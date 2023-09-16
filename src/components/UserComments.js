import React from "react";
import FontAwesome from "react-fontawesome";

const UserComments = ({ name, body, createdAt, msg, user, handleDelete, id, userId }) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="comments-list">
            <div className="media">

              {msg ? (
                <h4 className="mt-5">{msg}</h4>
              ) : (
                <>
                  <div className="media-left">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt="user"
                      className="rounded-circle"
                    />

                  </div>
                  <div className="media-body">
                    <h3 className="text-start media-heading user_name">
                      {name} <small>{createdAt.toDate().toDateString()}</small>
                    </h3>
                    {/* {user && user.uid === userId && (
                      <div style={{ float: "right" }}>
                        <FontAwesome
                          name="trash"
                          style={{ margin: "15px", cursor: "pointer" }}
                          size="2x"
                          onClick={() => handleDelete(id)}
                        />
                      </div>
                    )} */}
                    <p className="text-start">{body}
                    </p>
                  </div>
                </>

              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
