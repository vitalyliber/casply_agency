import React from "react";

const Grid = ({ list }) => {
  return (
    <div className="row">
      <div className="card-columns">
        {list.map(({ title, desc, link, blank }) => (
          <div key={title} className="card">
            <div className="card-body">
              <h1 className="card-title">{title}</h1>
              <p className="card-text">{desc}</p>
              <a
                href={link}
                target={blank && "_blank"}
                className="btn btn-light btn-block"
              >
                Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
