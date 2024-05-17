
import {Schema} from "mongoose";

const bookSchema = Schema(
    {
        title: {
            type: String,
            required: true,
        },
        authors: [{
            type: String,
            required: true,
        }],
        publisher: {
            type: String,
            required: true, 
        },
        publishedDate: {
            type: String,
            required: true, 
        },
    }, 
    {
        timestamps: true,
    }
);

export default bookSchema;
