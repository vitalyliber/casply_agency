import React from "react";

const list = [
  {
    title: "RPush-server",
    desc:
      "Keep push tokens from mobile devices and send push notifications to iOS/Android",
    github: "https://github.com/vitalyliber/rpush-server",
    site: "https://rpush.casply.com/",
    img: '/rpush-server.jpg'
  },
  {
    title: "Dokku GitHub action",
    desc: "Deploy applications to Dokku",
    github: "https://github.com/vitalyliber/dokku-github-action",
  },
  {
    title: "Virtual Gym",
    desc: "The best gym exercises to do at home",
    github: "https://github.com/vitalyliber/gym_coach",
    site: "https://gym.casply.com/",
  },
  {
    title: "Gostorm",
    desc: "Minimalistic performance and load testing tool written in Go.",
    github: "https://github.com/vitalyliber/gostorm",
  },
];

const OpenSourceSection = () => {
  return (
    <>
      <h1 className="mt-4 mb-5 text-center">Open Source</h1>
      <div className="row">
        <div className="card-columns">
          {list.map(({ title, desc, github, site, img }) => (
            <div key={title} className="card mb-3">
              {img && <img src={img} className="card-img-top mt-4" alt={title} />}
              <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className="card-text">{desc}</p>

                {site && (
                  <a className="btn btn-info mr-3" href={site} target="_blank">
                    Site
                  </a>
                )}
                {github && (
                  <a className="btn btn-dark" href={github} target="_blank">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OpenSourceSection;
