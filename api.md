API表
PART1 获取用户和天气信息
1. get_user_profile
  地址: /api/v1/user/profile
  头部: 
  - 请求类型: GET
  - Authorization: Bearer <token>
  信息: 
  - Path参数: 无
  - Query参数: 无
  返回: 
  - 成功示例:
{
  "code": 200,
  "data": {
    "user_id": 1,
    "nickname": "用户昵称",
    "avatar": "https://xxx.com/avatar.jpg",
    "gender": "male",
    "birthday": "1990-01-01",
    "height": 175,
    "weight": 65,
    "body_type": "neutral", // 体感类型
    "skin_type": "normal"   // 肤质类型，这个要不要让用户自己输入待定
  }
}
  功能: 获取当前登录用户的详细信息。

1. <update_user_profile>
  地址: </api/v1/user/profile>
  头部:
  - 请求类型:PATCH
  - Authorization: Bearer<Token>
  
  信息:
  - Path参数：无
  - Query参数：无
  - Body参数：
{
  "gender": "male",
  "birthday": "1990-01-01",
  "height": 175,
  "weight": 65,
  "body_type": "cold",//待定
  "skin_type": "sensitive"//待定
}
返回:
- 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "updated": true }
}

功能: 更新用户信息

1. <get_user_location>
  地址: < /api/v1/user/location>
  头部:
  - 请求类型:GET
  - Authorization: Bearer <Token>
  信息:
  - Query参数：precise：true（获取精确定位）
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "latitude": 39.9042,
    "longitude": 116.4074,
    "city": "北京市",
    "district": "朝阳区"
  }
}
  功能: 获取用户当前精确定位


1. <update_user_location>
  地址: < /api/v1/user/location>
  头部:
  - 请求类型: PATCH
  - Authorization: Bearer<Token>
  
  信息:
  - Body参数：
{
  "city": "上海市",
  "district": "浦东新区"
}
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "updated": true }
}
  - 错误响应示例（JSON格式）
  功能: 让用户可以手动切换城市/区县，适用于定位不准确/用户出差旅游期间

格式参考
1. <get_current_weather>
  地址: </api/v1/weather/current>
  头部:
  - 请求类型: GET
  - Authorization: Bearer <Token>
  
  信息:
  - Query参数：city:string
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "city": "北京市",
    "temperature": 22,
    "feels_like": 20,
    "humidity": 65,
    "wind_speed": 5,
    "condition": "晴",
    "forecast": [
      { "date": "2024-10-10", "high": 24, "low": 18, "condition": "多云" }
    ]
  }
}
  - 错误响应示例（JSON格式）
  功能: 获取当前城市实时天气和天气预报


PART2 穿搭方案生成
格式参考
1. <set_outfit_requirement>
  地址: </api/v1/outfit/requirement>
  头部:
  - 请求类型: POST
  - Content-Type: <application/json等>
  - Authorization: Bearer<Token>
  - 其他自定义头部（如有）
  信息:
  - Body参数：
{
  "occasion": "office", // 场合
  "duration": 8,        // 出行时长（小时）
  "style": "business"   // 风格偏好，这里可以让用户输入，也可以选择，最好的情况是用户输入自己的照片然后自动识别（但是这个工程量太大了）选择的问题可能是无法满足用户对个性，独特的需求。
}
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "requirement_id": 123 }
}
  
  功能: 提交用户穿搭需求（场合，时长，风格偏好）

1. <generate_outfit_plans>
  地址: </api/v1/outfit/generate>
  头部:
  - 请求类型: POST
  - Authorization: Bearer <Token>
  信息:
  - Body参数：
{
  "requirement_id": 123,
  "use_closet": true // 是否仅使用衣柜衣物
}
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "plans": [
      {
        "plan_id": 1,
        "clothes": [{"id": 1, "name": "白衬衫"}],
        "temperature_range": "18-24℃",
        "reason": "棉麻透气，适合通勤",
        "layer_suggestion": "单层",
        "from_closet": true
      }
    ]
  }
}
  - 错误响应示例（JSON格式）
  功能: 根据需求生成穿搭方案

格式参考
1. <regenerate_outfit_plan>
  地址: </api/v1/outfit/regenerate>
  头部:
  - 请求类型:  POST
  - Authorization:Bearer <token>
  
  信息:
  - Body参数:
{
  "plan_id": 1,
  "style_change": "casual" // 可选，切换风格
}
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "new_plan": { ... } }
}
  功能:换一套方案或者切换风格（万一用户对给出的穿衣方案不满）

1. <collect_outfit_plan>
  地址: < /api/v1/outfit/collect>
  头部:
  - 请求类型: POST
  - Authorization: Bearer <token>
  信息:
  - Body参数：
{
  "plan_id": 1
}
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "collected": true }
}
  
  功能: 收藏当前穿搭到“我的穿搭”

PART3 电子衣柜管理
格式参考
1. <upload_clothing_image>
  地址: </api/v1/closet/upload>
  头部:
  - 请求类型: POST
  - Authorization: Bearer <token>
  信息:
  - Body参数：FormData格式
images: file[]（多张图片）
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "items": [
      {
        "temp_id": "abc123",
        "category": "top",
        "color": "black",
        "fabric": "cotton",
        "season": "all",
        "style": "hoodie"
      }
    ]
  }
}
  - 错误响应示例（JSON格式）
  功能:批量上传衣物，后端返回AI识别之后的结果

格式参考
1. <确认衣物信息>
  地址:  /api/v1/closet/confirm
  头部:
  - 请求类型: POST
  - Authorization:  Bearer <token>
  信息:
  - Body参数：
{
  "temp_id": "abc123",
  "category": "top",
  "color": "black",
  "fabric": "cotton",
  "season": "all",
  "style": "hoodie",
  "tags": ["常用", "休闲"]
}
  
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "clothing_id": 456 }
}
  - 错误响应示例（JSON格式）
  功能:前端给后端用户确认或者修改的识别结果，并存入衣柜中（后端返回在衣柜中的clothid）

格式参考
1. <get_closet_items>
  地址: </api/v1/closet/items>
  头部:
  - 请求类型: GET
  - Authorization: Bearer <token>
  信息:
  - Query参数：
  - category: string（品类）
  - color: string（颜色）
  - season: string（季节）
  - tag: string（标签）
  - keyword: string（关键词）
  
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "items": [
      {
        "id": 456,
        "name": "黑色连帽卫衣",
        "image": "https://xxx.com/clothing.jpg",
        "category": "top",
        "color": "black",
        "fabric": "cotton",
        "season": "autumn",
        "tags": ["常用", "休闲"]
      }
    ]
  }
}
  
  功能: 按条件筛选或检索衣柜衣物

格式参考
1. <update_clothing_item>
  地址: <update_clothing_item>
  头部:
  - 请求类型: PATCH/DELETE
  - Authorization:Bearer <token>
  信息:
  - Path参数：
  -  id：interger
  - Body参数（PATCH有，DELETE无）：
{
  "tags": ["新年穿", "约会专属"]
}
  
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "updated": true }
}
  - 错误响应示例（JSON格式）
  功能: 编辑衣物标签或删除衣物

PART4 AI推荐和个性化设置
格式参考
1. <set_preferences>
  地址:  /api/v1/preferences
  头部:
  - 请求类型: POST
  - Authorization:  Bearer <token>
  信息:
  - Body参数：
{
  "color_pref": ["black", "white"],
  "fabric_pref": ["cotton", "linen"],
  "avoid_items": ["skirt", "high_heels"],
  "body_shape": "pear",
  "privacy": {
    "hide_body_info": false,
    "disable_location": false
  }
}
  
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "saved": true }
}
  
  功能: 设置用户穿衣偏好，以及用户避雷的类型，隐私设置

格式参考
1. <reset_preferences>
  地址: /api/v1/preferences/reset
  头部:
  - 请求类型: POST
  - Authorization: Bearer <token>
  信息:
  - Body参数：无
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": { "reset": true }
}
  
  功能: 重置偏好设置

PART5 电商联动板块
1. <get_missing_item_link>
  地址: </api/v1/shopping/missing>
  头部:
  - 请求类型: GET
  - Authorization:Bearer <token>
  信息:
  -  Query参数:
  -  item_name: string（单品名称，如“黑色棉麻衬衫”）
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "platform": "taobao",
    "search_url": "https://xxx.com/search?q=黑色棉麻衬衫"
  }
}
  
  功能: 获取缺品对应的电商搜索链接

格式参考
1. <get_similar_items>
  地址: < /api/v1/shopping/similar>
  头部:
  - 请求类型: GET
  - Authorization: Bearer <token>
  信息:
  - Query参数:
    - item_id: integer（衣柜衣物ID，可选）
    - description: string（单品描述，如“白色衬衫”）
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": [
    {
      "platform": "taobao",
      "title": "同款白色衬衫",
      "price": 199,
      "detail_url": "https://xxx.com/item/123"
    }
  ]
}
  - 错误响应示例（JSON格式）
  功能: 获取穿搭方案中单品的同款/相似款商品

PART6 辅助功能模块

1. <get_my_outfits>
  地址:  /api/v1/outfits/collected
  头部:
  - 请求类型：GET
  - Authorization:Bearer <token>
  信息:
  - Query参数:
      sort_by: "time" | "occasion"（排序方式）
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "outfits": [
      {
        "id": 1,
        "plan_data": { ... },
        "collected_at": "2024-10-10 10:00:00",
        "occasion": "office"
      }
    ]
  }
}
  - 错误响应示例（JSON格式）
  功能:  获取用户收藏的穿搭方案

格式参考
1. <get_today_outfit_sign>
  地址:  /api/v1/outfit/today
  头部:
  - 请求类型: GET
  - Authorization: Bearer <token>
  信息:
  - 无
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "sign": "22℃微风→休闲牛仔风，幸运色：雾霾蓝",
    "share_url": "https://xxx.com/share/123"
  }
}
  - 错误响应示例（JSON格式）
  功能: 生成每日穿搭签，支持分享


1. <get_closet_stats>
  地址: /api/v1/closet/stats
  头部:
  - 请求类型: GET
  - Content-Type: <application/json等>
  - Authorization: Bearer <token>
  信息:
  - 无
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "total_items": 45,
    "category_distribution": { "top": 20, "bottom": 15 },
    "unused_items": [
      { "id": 123, "name": "红色毛衣", "last_worn": "2024-07-01" }
    ]
  }
}
  - 错误响应示例（JSON格式）
  功能:  统计衣柜衣物总数、分类占比、长期未穿衣物

PART7 突发天气变化穿搭提醒
1. <get_outfit_alerts>
  地址: /api/v1/alerts/outfit
  头部:
  - 请求类型: GET
  - Authorization: Bearer <token>
  信息:
  - 无
  返回:
  - 成功响应示例（JSON格式）
{
  "code": 200,
  "data": {
    "alerts": [
      {
        "type": "temperature_drop",
        "message": "明日气温骤降8℃，建议加外套",
        "suggested_outfit": { ... }
      }
    ]
  }
}
  - 错误响应示例（JSON格式）
  功能:  获取天气突变等穿搭提醒