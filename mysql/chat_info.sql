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

 Date: 02/04/2021 11:16:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chat_info
-- ----------------------------
DROP TABLE IF EXISTS `chat_info`;
CREATE TABLE `chat_info`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `user_chat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `service_chat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_sendtime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `service_sendtime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chat_info
-- ----------------------------
INSERT INTO `chat_info` VALUES (1, 'null', 'weeerwer', 'null', '13423242');
INSERT INTO `chat_info` VALUES (41, NULL, 'sssss', NULL, 'sssss');
INSERT INTO `chat_info` VALUES (42, NULL, 'dfsdfbsd', NULL, '2021-04-01 15:01:02');
INSERT INTO `chat_info` VALUES (43, NULL, 'dfbsdfb', NULL, '2021-04-01 15:01:06');
INSERT INTO `chat_info` VALUES (44, NULL, 'bsdfbsdf', NULL, '2021-04-01 15:01:28');
INSERT INTO `chat_info` VALUES (45, NULL, 'sdfsdvfsdfv', NULL, '2021-04-01 15:05:30');
INSERT INTO `chat_info` VALUES (46, NULL, 'sdfvdfvsdv', NULL, '2021-04-01 15:05:34');
INSERT INTO `chat_info` VALUES (47, NULL, 'fdbd', NULL, '2021-04-01 15:06:27');
INSERT INTO `chat_info` VALUES (48, NULL, 'sfgdsd ', NULL, '2021-04-01 19:38:06');
INSERT INTO `chat_info` VALUES (49, NULL, 'sdvadvasdvkn', NULL, '2021-04-01 19:38:07');
INSERT INTO `chat_info` VALUES (50, NULL, 'sdvsd', NULL, '2021-04-01 19:38:16');
INSERT INTO `chat_info` VALUES (51, NULL, '都不舍得发', NULL, '2021-04-01 20:30:41');
INSERT INTO `chat_info` VALUES (52, NULL, '发送给司法所覆盖', NULL, '2021-04-01 20:30:43');
INSERT INTO `chat_info` VALUES (53, NULL, '儿歌\n\n', NULL, '2021-04-01 20:34:47');
INSERT INTO `chat_info` VALUES (54, NULL, '水电费', NULL, '2021-04-01 20:34:52');
INSERT INTO `chat_info` VALUES (55, NULL, 'save', NULL, '2021-04-01 20:35:11');
INSERT INTO `chat_info` VALUES (56, NULL, '的丧尸国度', NULL, '2021-04-01 20:35:49');
INSERT INTO `chat_info` VALUES (57, NULL, '按时吃', NULL, '2021-04-01 20:35:52');
INSERT INTO `chat_info` VALUES (58, NULL, 'sad是大V', NULL, '2021-04-01 20:43:47');
INSERT INTO `chat_info` VALUES (59, NULL, '地方vsdf\n\n', NULL, '2021-04-01 20:45:52');
INSERT INTO `chat_info` VALUES (60, NULL, '是大V十大', NULL, '2021-04-01 20:45:54');
INSERT INTO `chat_info` VALUES (61, NULL, '埃里克你上课', NULL, '2021-04-01 20:45:56');
INSERT INTO `chat_info` VALUES (62, NULL, 'as插上\n\n', NULL, '2021-04-01 20:49:02');
INSERT INTO `chat_info` VALUES (63, NULL, 'sad时差', NULL, '2021-04-01 20:49:04');
INSERT INTO `chat_info` VALUES (64, NULL, 'AAS', NULL, '2021-04-01 20:49:05');
INSERT INTO `chat_info` VALUES (65, NULL, 'as插上', NULL, '2021-04-01 20:49:07');
INSERT INTO `chat_info` VALUES (66, NULL, 'ASCAs', NULL, '2021-04-01 20:49:08');
INSERT INTO `chat_info` VALUES (67, NULL, '实打实', NULL, '2021-04-01 20:52:06');
INSERT INTO `chat_info` VALUES (68, NULL, '宣传宣传', NULL, '2021-04-01 20:54:22');
INSERT INTO `chat_info` VALUES (69, NULL, '大风歌碑', NULL, '2021-04-01 20:54:45');
INSERT INTO `chat_info` VALUES (70, NULL, 'd撒大声地', NULL, '2021-04-01 21:00:16');
INSERT INTO `chat_info` VALUES (71, NULL, 's发送到水电费是', NULL, '2021-04-01 21:01:51');
INSERT INTO `chat_info` VALUES (72, NULL, '大是大非SV的', NULL, '2021-04-01 21:05:46');
INSERT INTO `chat_info` VALUES (73, NULL, '水电费vadsvsdf', NULL, '2021-04-01 21:06:59');
INSERT INTO `chat_info` VALUES (74, NULL, '想呈现出', NULL, '2021-04-01 21:07:33');
INSERT INTO `chat_info` VALUES (75, NULL, '递四方速递', NULL, '2021-04-01 21:07:35');
INSERT INTO `chat_info` VALUES (76, NULL, '东方闪电f', NULL, '2021-04-01 21:07:37');
INSERT INTO `chat_info` VALUES (77, NULL, '电风扇地方', NULL, '2021-04-01 21:07:39');
INSERT INTO `chat_info` VALUES (78, NULL, '梵蒂冈地方', NULL, '2021-04-01 21:08:30');
INSERT INTO `chat_info` VALUES (79, NULL, '地方个', NULL, '2021-04-01 21:08:32');
INSERT INTO `chat_info` VALUES (80, NULL, '梵高方式地方非法所得', NULL, '2021-04-01 21:08:42');
INSERT INTO `chat_info` VALUES (81, NULL, '对方跟不上', NULL, '2021-04-01 21:11:43');
INSERT INTO `chat_info` VALUES (82, NULL, '电饭锅', NULL, '2021-04-01 21:11:44');
INSERT INTO `chat_info` VALUES (83, NULL, '梵蒂冈', NULL, '2021-04-01 21:11:45');
INSERT INTO `chat_info` VALUES (84, NULL, '地方', NULL, '2021-04-01 21:30:25');
INSERT INTO `chat_info` VALUES (85, NULL, '电饭锅', NULL, '2021-04-01 21:30:29');
INSERT INTO `chat_info` VALUES (86, NULL, '梵蒂冈', NULL, '2021-04-01 21:30:30');
INSERT INTO `chat_info` VALUES (87, NULL, '都是', NULL, '2021-04-02 00:20:45');
INSERT INTO `chat_info` VALUES (88, NULL, '爱上茶', NULL, '2021-04-02 00:20:51');
INSERT INTO `chat_info` VALUES (89, NULL, 'SA', NULL, '2021-04-02 00:21:15');
INSERT INTO `chat_info` VALUES (90, NULL, 'as', NULL, '2021-04-02 00:21:17');
INSERT INTO `chat_info` VALUES (91, NULL, 'as', NULL, '2021-04-02 00:21:21');
INSERT INTO `chat_info` VALUES (92, NULL, 'Sacai', NULL, '2021-04-02 00:23:22');

SET FOREIGN_KEY_CHECKS = 1;
