import { User } from "./user.entity";
import { PostEntity } from "./post.entity";
import { GenreEntity } from "./genre.entity";


const entities = [User];
const postentity=[PostEntity]
const genreentity=[GenreEntity]


export {User};
export {PostEntity}
export {GenreEntity}
export default {
    entities,
    postentity,
    genreentity,
}
