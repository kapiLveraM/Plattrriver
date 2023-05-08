import React from "react";
import starImg from "../assets/img/png/Star_header.png";
import dogImg from "../assets/img/png/dogIcon.png";
import ShaverImg from "../assets/img/png/Sahwver.png";
import cross from "../assets/img/png/cross.png";
import dottImg1 from "../assets/img/png/dott_1.png";
import dottImg2 from "../assets/img/png/dott_2.png";
const PlatteRiverHeader = () => {
  return (
    <>
      <section className=" bg_hedader_img min-vh-100 pt-5 overflow-hidden">
        <div className=" container">
          <div className="PlatteRiver_Box1 text-center m-auto py-3 px-3 position-relative">
            <img
              src={dottImg1}
              alt="dottImg1"
              className=" position-absolute dott_img1_setup"
            />
            <img
              src={dottImg2}
              alt="dottImg1"
              className=" position-absolute dott_img2_setup"
            />
            <div className="PlatteRiver_Box2 pt-5 pb-4">
              <p className=" fw-bold ff_ComicGecko text-white fs_sm text-center">
                Platte River Campground
              </p>
              <p className="opacity_0_p_7 text-white fw-normal fs_xsm ff_Calibri">
                Among Top 50 campgrounds in California
              </p>
              <img src={starImg} alt="starImg" />
              <p className="opacity_0_p_7 text-white fw-normal fs_xsm ff_Calibri pt-3">
                5685 Lake Michigan Rd, Honor, MI 49640, United States
              </p>
              <span className=" d-block fs_xsm ff_Calibri fw-normal text-white opacity_0_p_7">
                Contact:
                <a
                  href="#Contact"
                  className="fs_xsm ff_Calibri fw-normal text-white "
                >
                  +1 231 326 5134{" "}
                </a>
              </span>
              <a
                href="#"
                className=" fs_xsm ff_Calibri fw-normal text-white opacity_0_p_7"
              >
                www.example.com
              </a>
              <div className="row justify-content-center align-items-center justify-content-sm-between mx-5 px-2 px-sm-0 mt-5">
                <div className=" col-6 col-sm-4 pt-3 pt-md-4">
                  <div className="common_crical">
                    <p className=" fs_xsm ff_Calibri fw-bold mb-0 pt-3">
                      All year
                    </p>
                    <p className=" opacity_0_p_7 fs_xsm ff_Calibri fw-normal mb-0 ">
                      Total Sites
                    </p>
                  </div>
                </div>
                <div className="  col-6 col-sm-4 pt-3 pt-md-4">
                  <div className="common_crical p-3">
                    <p className=" fs_xsm ff_Calibri fw-bold mb-0 ">174</p>
                    <p className=" opacity_0_p_7 fs_xsm ff_Calibri fw-normal mb-0 ">
                      Season
                    </p>
                  </div>
                </div>
                <div className="  col-6 col-sm-4 pt-3 pt-md-4">
                  <div className="common_crical p-3">
                    <p className=" fs_xsm ff_Calibri fw-bold mb-0 ">45</p>
                    <p className=" opacity_0_p_7 fs_xsm ff_Calibri fw-normal mb-0 ">
                      Nightly cost
                    </p>
                  </div>
                </div>
                <div className=" col-6 col-sm-4 pt-3 pt-md-4">
                  <div className="img_crical p-3">
                    <img src={dogImg} alt="dogImg" />
                  </div>
                </div>
                <div className=" col-6 col-sm-4 pt-3 pt-md-4">
                  <div className="img_crical p-3">
                    <img src={ShaverImg} alt="ShaverImg" />
                  </div>
                </div>
                <div className="  col-6 col-sm-4 pt-3 pt-md-4">
                  <div className="RV_Trailers position-relative p-2">
                    <img
                      src={cross}
                      alt="cross"
                      className=" position-absolute Cross_img_setup"
                    />
                    <p className=" fs_xsm ff_Calibri fw-normal opacity_0_p_7 mb-0 pt-4">
                      RV/Trailers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlatteRiverHeader;
