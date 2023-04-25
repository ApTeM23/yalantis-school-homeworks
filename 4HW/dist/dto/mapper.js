"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDTOToPost = exports.mapDTOToUser = exports.mapPostToDTO = exports.mapUserToDTO = void 0;
const User_1 = require("../entity/User");
const Post_1 = require("../entity/Post");
function mapUserToDTO(user) {
    const { id, username, email, age, info, address } = user;
    return { id, username, email, age, info, address };
}
exports.mapUserToDTO = mapUserToDTO;
function mapPostToDTO(post) {
    const { id, date_creation, title, text, user } = post;
    return { id, date_creation, title, text, user };
}
exports.mapPostToDTO = mapPostToDTO;
function mapDTOToUser(dto) {
    const { id, username, email, age, info, address } = dto;
    return Object.assign(new User_1.User(), { id, username, email, age, info, address });
}
exports.mapDTOToUser = mapDTOToUser;
function mapDTOToPost(dto) {
    const { id, date_creation, title, text, user } = dto;
    const post = Object.assign(new Post_1.Post(), { id, date_creation, title, text, user });
    return post;
}
exports.mapDTOToPost = mapDTOToPost;
//# sourceMappingURL=mapper.js.map