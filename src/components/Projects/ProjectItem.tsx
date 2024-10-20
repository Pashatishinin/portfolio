import React from "react";

const ProjectItem = ({ title, link, github, skills, img }) => {
 
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 bg-[#1e1e1e] text-white">
      <div className="m-3">
        <img src={img} alt="" />
      </div>
      <div className="m-3">
        <div className="flex justify-between items-center">
          <h3 className="w-2/3 text-xl font-montserrat uppercase font-semibold tracking-widest">
            {title}
          </h3>
          <div className="w-1/4 flex gap-3 justify-end">
            <a
              className="rounded-full p-2 border border-white flex justify-end"
              href={link}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon w-5 md:w-7 fill-current text-white"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="M268 112l144 144-144 144M392 256H100"
                />
              </svg>
            </a>

            <a
              href={github}
              className="rounded-full p-2 border border-white flex justify-end"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 md:w-7 fill-current text-white"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-16">
          <h4 className="uppercase text-sm font-medium tracking-widest">
            skills:
          </h4>
          <ul className="flex flex-wrap my-8 mx-2 gap-5 ">
            {skills.map((item, index) => (
              <li key={index}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 fill-current text-gray-300"
                >
                  <path d={item} />
                </svg>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
