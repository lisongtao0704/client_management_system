/*
 Navicat Premium Data Transfer

 Source Server         : user
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : userdb

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 06/04/2021 04:11:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for service_info
-- ----------------------------
DROP TABLE IF EXISTS `service_info`;
CREATE TABLE `service_info`  (
  `service_id` int(255) NOT NULL AUTO_INCREMENT,
  `service_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `service_pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `service_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `service_nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`service_id`, `service_number`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of service_info
-- ----------------------------
INSERT INTO `service_info` VALUES (1, '15179187360', '1q2w3e4r', '李诵焘', 'Superman');
INSERT INTO `service_info` VALUES (2, '17346716740', '1q2w3e4r', NULL, '谷歌');
INSERT INTO `service_info` VALUES (3, '19999999999', '1q2w3e4r', NULL, '666');
INSERT INTO `service_info` VALUES (4, '16666666666', '1q2w3e4r', NULL, '焘焘');
INSERT INTO `service_info` VALUES (5, '17777777777', '1q2w3e4r', NULL, '诵焘');

SET FOREIGN_KEY_CHECKS = 1;
