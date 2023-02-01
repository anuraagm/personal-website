import React, { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import HtmlReactParser from 'html-react-parser';

function ProjectModal({openModal, setOpenModal, data}) {

  
  const [showModal, setShowModal] = useState(openModal);

  useEffect(() => {
    console.log("open modal : ",openModal);
    setShowModal(openModal);
  },[openModal]);

  return (
    <div className="Project">
      {showModal && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-zinc-800 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-200">
                {data.project_name}
              </h3>
              <div className="mt-6">
                <p className="text-sm leading-5 text-gray-200">
                  {HtmlReactParser(DOMPurify.sanitize(data?.project_details))}
                </p>
              </div>
              {data.project_link !== "\"\"" &&
                <div className="mt-6">
                    <p className="text-sm leading-5 text-gray-400">
                        <a href={data.project_link}>Project Link</a>
                    </p>
                </div>
              }
            </div>
            <div className="bg-zinc-800 px-4 py-1 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  onClick={() => setOpenModal(false)}
                  type="button"
                  className="inline-flex justify-center center w-full rounded-md border border-transparent px-4 py-2 bg-zinc-900 hover:bg-zinc-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-zinc-600 focus:outline-none focus:border-zinc-700 focus:shadow-outline-zinc transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
