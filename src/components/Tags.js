import React from "react";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
    return (
        <div>
            <div className="blog-heading text-start py-2 md-4">Tags</div>
            <div className="tags">
                {tags?.map((tag, index) => (
                    <p className="tag" key={index}>
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Tags;