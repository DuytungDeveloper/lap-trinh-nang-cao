# Lập trình nâng cao - CO2039

Author : Đào Duy Tùng - 2033364

Date : 2024-12-07

Bảng sao kê giao dịch chuyển khoản đến tài khoản VCB của MTTQ từ 1/9/2024 - 10/9/2024

## Hướng Dẫn Deploy Dự Án Tra Cứu Dữ Liệu “Sao Kê”

Dự án này là một ứng dụng web tra cứu dữ liệu "Sao Kê" của MTTQ VN, được xây dựng bằng **React.js** ở frontend và **Node.js** ở backend.

## Yêu Cầu Trước Khi Bắt Đầu

1. **Node.js** (>= v20.17.0)
2. **Git** (phiên bản mới nhất)
3. **MongoDB**
4. **Tài khoản GitHub**
5. **Docker**

## Hướng Dẫn Deploy

### 1. Clone Dự Án Từ GitHub

Sao chép mã nguồn từ kho lưu trữ GitHub:

```bash
git clone <URL-repo-GitHub-của-bạn>
cd <tên-thư-mục-dự-án>
```

## Cấu Trúc Thư Mục Source Code

Dự án được tổ chức với cấu trúc quan trọng như sau:

```plaintext
project-root/
├── convert/               # Chuyển đổi dữ liệu gốc từ CSV sang CSDL
│   ├── index.js           # File chính thực thi việc chuyển đổi dữ liệu và lưu trữ
│   └── package.json       # Thông tin dependencies và scripts
│
├── saoke03/               # Frontend and Backend code (NextJS)
│   ├── .env.example       # File mẫu cấu hình môi trường
│   └── package.json       # Thông tin dependencies và scripts
│
├── deploy.sh              # File cài đặt tự động
├── docker-compose.yaml    # File xây dựng các khối hệ thống
├── .gitignore             # File cấu hình bỏ qua khi commit
├── README.md              # Hướng dẫn sử dụng và deploy dự án
└── LICENSE                # Thông tin bản quyền dự án
```

Source này đã được tối giản nhất có thể chỉ cần bạn chạy file **_deploy.sh_** là có thể sử dụng được các chức năng cơ bản

> **NOTE:** Đảm bảo bạn đã cài đặt đầy đủ các dependencies cho ***convert*** và các yêu cầu phía trên trước khi chạy dự án.

> Nếu bạn gặp lỗi kết nối, kiểm tra lại file `.env` để đảm bảo các thông số được cấu hình chính xác.


Nếu muốn sử dụng các tính năng nâng cao thì chỉ cần sửa đổi file **_docker-compose.yaml_** ở phần **_GITHUB_CLIENT_ID_** và ***GITHUB_CLIENT_SECRET*** dùng để đăng nhập hoặc nếu bạn biết code thì vào source ở phần ***saoke03*** để bypass hoặc tắt chức năng đó đi.
