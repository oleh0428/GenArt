import React, { ReactElement } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';

import hero from "../../../assets/image/hero.jpg";
import linkImage1 from "../../../assets/image/link-image-1.jpg";
import linkImage2 from "../../../assets/image/link-image-2.jpg";
import linkImage3 from "../../../assets/image/link-image-3.jpg";
import linkImage4 from "../../../assets/image/link-image-4.jpg";
import art from "../../../assets/image/art.jpg";
import backImage1 from "../../../assets/image/back-image-1.jpg";
import scene from "../../../assets/image/scene.jpg";

export default function Landing(): ReactElement {
  return (
    <div className="landing-page bg-white pt-24">
      <Header />
      <div className="hero relative" style={{backgroundImage: `url(${hero})`, backgroundRepeat: 'no-repeat', height: '720px', backgroundSize: 'cover'}}>
        <button className="btn-black bg-black w-40 font-base text-white py-3 absolute bottom-44 left-40 rounded">Mint now</button>
      </div>
      <div className="flex justify-between items-center px-28 py-32">
        <a href="/"><img alt="linkImage1" src={linkImage1}></img></a>
        <a href="/"><img alt="linkImage2" src={linkImage2}></img></a>
        <a href="/"><img alt="linkImage3" src={linkImage3}></img></a>
        <a href="/"><img alt="linkImage4" src={linkImage4}></img></a>
      </div>
      <div className="art relative" style={{backgroundImage: `url(${art})`, backgroundRepeat: 'no-repeat', height: '800px', backgroundSize: '100%'}}>
        <h3 className="text-center mt-48 text-white absolute top-4 text-8xl w-full font-black">Collection <br/>Title</h3>
      </div>
      <div className="blog-group flex justify-between items-center px-40 py-16 w-full">
        <div className="w-5/12">
          <h3 className="text-primaryBlue text-5xl font-semibold">Beauty in complexity</h3>
          <p className="text-primaryGrey text-xl mt-9">Tellus in metus vulputate eu scelerisque felis imperdiet proin. Adipiscing diam donec adipiscing tristique risus nec feugiat. Nascetur ridiculus mus mauris vitae ultricies leo.</p>
          <p className="text-primaryGrey text-xl mt-14">Fringilla ut morbi tincidunt augue interdum velit euismod. Sed augue lacus viverra vitae congue eu consequat ac felis. Pulvinar etiam non quam lacus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.</p>
        </div>
        <div className="bg-grey w-5/12" style={{height: '700px'}}>

        </div>
      </div>
      <div className="py-16 px-56 flex justify-between items-center">
        <div>
          <h4 className="text-primaryBlue font-semibold text-5xl text-center">30</h4>
          <p className="text-primaryGrey text-xl">Different properties</p>
        </div>
        <div>
          <h4 className="text-primaryBlue font-semibold text-5xl text-center">24,900+</h4>
          <p className="text-primaryGrey text-xl">Satisfied clients annually</p>
        </div>
        <div>
          <h4 className="text-primaryBlue font-semibold text-5xl text-center">470+</h4>
          <p className="text-primaryGrey text-xl">Worldwide Employees</p>
        </div>
      </div>
      <div className="py-32 flex justify-start items-center flex-col">
        <h3 className="text-7xl text-primaryBlue font-semibold text-center mb-10">Listen to our <br/>interview with Laya</h3>
        <p className="text-xl text-primaryGrey text-center mb-16">Now you can build fast your awesome website with these <br/>ready-to-use blocks, elements and sections.</p>
        <label className="cursor-pointer flex justify-start items-center font-base">
          <button className="relative bg-black w-16 h-16 mr-5" style={{borderRadius: '50%'}}>
            <div 
              className="absolute w-0 h-0"
              style={{top: 'calc(50% - 10px)', left: 'calc(50% - 5px)', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '10px solid white'}} />
          </button>
          Listen now
        </label>
      </div>
      <div className="bg-grey py-14">
        <div className="overflow-x-auto">
          <div className="flex mb-8">
            <img className="mr-6" alt="back" src={backImage1} />
            <img className="mr-6" alt="back" src={backImage1} />
            <img className="mr-6" alt="back" src={backImage1} />
            <img className="mr-6" alt="back" src={backImage1} />
            <img className="mr-6" alt="back" src={backImage1} />
            <img className="mr-6" alt="back" src={backImage1} />
          </div>
          <div className="flex">
            <img className="ml-6" alt="back" src={backImage1} />
            <img className="ml-6" alt="back" src={backImage1} />
            <img className="ml-6" alt="back" src={backImage1} />
            <img className="ml-6" alt="back" src={backImage1} />
            <img className="ml-6" alt="back" src={backImage1} />
            <img className="ml-6" alt="back" src={backImage1} />
          </div>
        </div>
      </div>
      <div className="py-36 px-40 flex justify-between items-start">
        <img className="w-5/12" alt="scene" src={scene} />
        <div className="w-5/12">
          <h3 className="text-5xl text-primaryBlue font-semibold mb-4">Behind the scenes</h3>
          <p className="text-xl text-primaryGrey mb-28">All beauty lies in the tension between order and chaos, simplicity and complexity, pattern and randomness.  But what really interest us are those things that seem new, exciting and strange but that at the same time we feel have an intrinsic logic, patter or familiarity – something to hang on and work with, to study the phenomenon and bring meaning and understanding to it.</p>
          <button className="border-2 border-solid border-blueLight rounded-lg text-blueLight font-medium text-base px-16 py-5">Listen</button>
        </div>
      </div>
      <div className="pt-16 pb-48 px-40">
        <h3 className="text-5xl text-primaryBlue font-semibold mb-16">Behind the scenes</h3>
        <div className="flex justify-between items-start">
          <div className="w-5/12">
            <div className="p-11 bg-black text-white">
              <p className="mb-3 text-xl font-bold">This is the first feature</p>
              <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipiscing tempor risus ultricies tristique.</p>
            </div>
            <div className="p-11 text-primaryBlue border-b-2 border-solid border-grey">
              <p className="mb-3 text-xl font-bold">This is the second feature</p>
              <p className="text-xl text-primaryGrey">Lorem ipsum dolor sit amet consectetur adipiscing tempor risus ultricies tristique.</p>
            </div>
            <div className="p-11 text-primaryBlue">
              <p className="mb-3 text-xl font-bold">This is the third feature</p>
              <p className="text-xl text-primaryGrey">Lorem ipsum dolor sit amet consectetur adipiscing tempor risus ultricies tristique.</p>
            </div>
          </div>
          <div className="w-5/12 bg-grey" style={{height: '515px'}}>

          </div>
        </div>
      </div>
      <div className="py-28 px-40 flex justify-between items-center">
        <img className="w-5/12" style={{height: '476px'}} alt="art" src={art} />
        <div className="w-5/12 pt-10">
          <h3 className="text-6xl text-primaryBlue font-semibold">Time to mint</h3>
          <p className="mb-32 text-xl">Now you can build fast your awesome website with these ready-to-use blocks, elements and sections.</p>
          <p className="mb-5 text-lg text-primaryBlue font-bold">Remaining: 5,500 / 5,500</p>
          <div className="flex justify-start items-center">
            <input type="text" placeholder="Select Membership" className="pl-3 py-4 w-64 text-xl mr-6 border border-solid border-black rounded-xl text-dark"></input>
            <button className="btn-black bg-black w-40 font-base text-white py-4 rounded-xl">Mint (0.15E)</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
