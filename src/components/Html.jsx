import React from "react";

const Html = () => {
  return (
    <div>
      <h2 style={{color:"green",textAlign:"center"}}>Html Language</h2>
      <div style={{display:"flex" }}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" width={200} height={200} alt="img"/>
              </div>
              <div>
                  <dl>
                       <dt><b>Language</b></dt>
                      <dd>HTML</dd>
                      <dt><b>Description</b></dt>
                      <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi eaque accusantium aspernatur quod, nemo labore perspiciatis explicabo illum doloremque vitae ab exercitationem vel ullam facilis, officia quas repellendus laudantium ad nam, doloribus iste quidem omnis minima. Recusandae, neque, maiores delectus minima vitae facere corporis sed veritatis vel debitis aspernatur.</dd>
                  </dl>
              </div>
      </div>
    </div>
  );
};

export default Html;
