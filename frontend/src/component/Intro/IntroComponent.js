import {useEffect, useState} from 'react';
import axios from 'axios';

function IntroComponent() {
    
    const [pageData, setPageData] = useState(null);
    useEffect(() => {
        axios.get('/pages/1/')
        .then(page => {
            console.log(page.data);
            setPageData(page.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    
    return(
        <div className="Intro"> 
            {
                pageData !== null ? (
                    <div>
                        <div className='Title col-span-2 mb-12'>
                            <h1 className="text-5xl text-gray-200 font-bold mb-12">
                                {pageData.page_title}
                            </h1>
                        </div>
                        <div className='Content col-span-2 mt-12'>
                            <p className="text-1xl text-gray-200 mt-12">
                                {pageData.page_content}
                            </p>
                        </div>
                    </div>
                )
                :
                <div>
                    <h1>Loading</h1>
                </div> 
            }
        </div>
    );
}

export default IntroComponent;