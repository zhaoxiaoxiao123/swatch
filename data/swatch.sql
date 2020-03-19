SET NAMES UTF8;
DROP DATABASE IF EXISTS swatch;
CREATE DATABASE swatch CHARSET=UTF8;
USE swatch;

/**手表型号家族**/
CREATE TABLE sh_list_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32),
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
);

/**手表**/
CREATE TABLE sh_list(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  lname VARCHAR(32),          #商品名称
  os VARCHAR(32),             #操作系统
  memory VARCHAR(32),         #内存容量
  resolution VARCHAR(32),     #分辨率
  video_card VARCHAR(32),     #显卡型号
  cpu VARCHAR(32),            #处理器
  video_memory VARCHAR(32),   #显存容量
  category VARCHAR(32),       #所属分类
  disk VARCHAR(32),           #硬盘容量及类型
  details VARCHAR(1024),      #产品详细说明

  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN           #是否促销中
);