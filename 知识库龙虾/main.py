from flask import Flask, render_template, send_from_directory, request, redirect, url_for
import os
import requests
import json

app = Flask(__name__)

# 静态文件目录
app.static_folder = 'static'

# Creem API配置
CREEM_API_KEY = 'your_creem_api_key'  # 替换为你的Creem API密钥
CREEM_API_BASE = 'https://api.creem.io/v1'

# 产品ID映射
PRODUCTS = {
    'community': 'product_id_1',  # 社群版
    'online': 'product_id_2',      # 线上课程
    'offline': 'product_id_3',      # 线下课程
    'team': 'product_id_4'          # 团队内训
}

# 主页面
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# 视频资源页
@app.route('/video_resources')
def video_resources():
    return send_from_directory('.', 'video_resources.html')

# 视频详情页
@app.route('/video_resources/<filename>')
def video_detail(filename):
    return send_from_directory('video_resources', filename)

# 微信登录页
@app.route('/wechat/qrcode')
def wechat_qrcode():
    return send_from_directory('wechat', 'qrcode.html')

# 创建支付会话
@app.route('/create-checkout', methods=['POST'])
def create_checkout():
    data = request.json
    product_id = PRODUCTS.get(data.get('product'))
    
    if not product_id:
        return {'error': 'Invalid product'}

    # 调用Creem API创建结账会话
    headers = {
        'Authorization': f'Bearer {CREEM_API_KEY}',
        'Content-Type': 'application/json'
    }
    
    payload = {
        'product_id': product_id,
        'success_url': f'{request.host_url}payment-success',
        'cancel_url': f'{request.host_url}payment-cancel',
        'metadata': {
            'product': data.get('product'),
            'quantity': 1
        }
    }
    
    try:
        response = requests.post(
            f'{CREEM_API_BASE}/checkout/sessions',
            headers=headers,
            json=payload
        )
        response_data = response.json()
        
        if response.status_code == 200:
            return {'checkout_url': response_data.get('checkout_url')}
        else:
            return {'error': response_data.get('error')}
    except Exception as e:
        return {'error': str(e)}

# 支付成功页
@app.route('/payment-success')
def payment_success():
    return '''
    <html>
    <head>
        <title>支付成功</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            h1 { color: #4CAF50; }
            p { font-size: 18px; }
            a { color: #007bff; text-decoration: none; }
        </style>
    </head>
    <body>
        <h1>支付成功！</h1>
        <p>感谢您的购买，我们会尽快与您联系。</p>
        <p><a href="/">返回首页</a></p>
    </body>
    </html>
    '''

# 支付取消页
@app.route('/payment-cancel')
def payment_cancel():
    return '''
    <html>
    <head>
        <title>支付取消</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            h1 { color: #f44336; }
            p { font-size: 18px; }
            a { color: #007bff; text-decoration: none; }
        </style>
    </head>
    <body>
        <h1>支付已取消</h1>
        <p>您可以重新尝试支付或联系我们获取帮助。</p>
        <p><a href="/">返回首页</a></p>
    </body>
    </html>
    '''

# 静态文件服务
@app.route('/<path:path>')
def static_files(path):
    if os.path.exists(path):
        return send_from_directory('.', path)
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
