# Hàm in hình luyện tập if then else for loop

Vẽ hình bằng console.log.

```
 node index.js

```

## Tạo class tên drawClass chứa các hàm vẽ hình bao gồm 
1. Hàm tổng thể phối hợp các hàm chứ năng
2. Hàm vẽ từng dòng
3. Hàm vẽ từng điểm trong một dòng 

## File chạy index, chạy trên terminal
1. Hỏi người dùng nhập 3 tham số rows, columns và thickness của hình
2. Kiểm tra đầu vào người dùng nhập có phải là số nguyên dương hợp lệ không
3. In ra kết quả vẽ hình trên terminal

## Có 2 trường hợp in hình tùy thuộc vào tham số đầu vào
1. Với rows, cols số lẻ chạy drawEverything() vẽ 10 hình trừ drawDiamondEven
2. Với rows, cols số chẵn chạy drawEverything2() vẽ 6 hình bỏ qua drawDiamondOdd, drawDiamondBox, drawDiamondOdd2, drawCornerBox và drawZigZag

## Các hàm vẽ hình mới gồm:
1. drawBox2: Hàm in hình hộp chứa 1 hình hộp bên trong
2. drawCrossUp: Hàm in đường chéo từ dưới lên trên
3. drawX: Hàm in 1 chữ X
4. drawCrosses: Hàm in 3 đường chạy chéo từ trên xuống dưới
5. drawDiamondEven: Hàm in hình con thoi khi rows và cols là số chẵn
6. drawDiamondOdd: Hàm in hình con thoi khi rows và cols là số lẻ
7. drawDiamondBox: Hàm in hình con thoi khi rows và cols là số lẻ và nằm trong hình box
8. drawDiamondOdd2: Hàm in 2 hình con thoi lồng vào nhau, hình nhỏ cách hình to 1 khoảng cách = tham số thick
9. drawCornerBox: Hàm vẽ hình box có chứa 1 box nhỏ ở trung tâm và 4 box ở 4 góc
10. drawFly: Hàm vẽ hình cánh bướm - 2 hình tam giác chụm vào nhau
11. drawZigZag: Hàm vẽ zig zag với 4 đường cân lên - xuống - lên - xuống