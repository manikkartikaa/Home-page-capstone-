import React, { useState } from 'react'; // Mengimpor useState untuk mengelola state input
import './FurniturePageRevise.scss'

export default function FurniturePageRevise() {
  const [searchQuery, setSearchQuery] = useState(''); // Deklarasi state untuk menyimpan nilai input pencarian

  // Handler untuk memperbarui nilai input saat pengguna mengubah teks
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="furniture-page-revise">
      <div className="nav">
        <div className="elegant-logo-2">
        </div>
        <div className="home">
          Home
        </div>
        <div className="recommendation">
          Recommendation
        </div>
        <div className="container-line">
        <div className="furniture">
          Furniture
        </div>
        <div className="group-229">
        <div className="line-1">
        </div>
      </div>
      </div>
        <div className="about">
          About
        </div>
        <div className="user-cicrle-duotone">
          </div>      
          </div>
          <div className="landing">
          <div className="container-top">
      <div className="dive-into-your-needs">
        Dive into your needs
      </div>
      </div>
      <div className="group-252">
        <div className="search-bar">
          <input className='ex-ineed-awhite-chair inputsearch'
              type="text"
              placeholder="ex. I need a white chair" // Anda dapat menambahkan kelas CSS untuk styling
            />
          <div className="group">
          </div>
        </div>
      </div>
      <span className="furniture-items">
        Furniture Items
      </span>
      <div className="container-23">
        <div className="product-list">
          <div className="container-3">
            <div className="group-231">
              <div className="container-10">
                <div className="product-1">
                </div>
              </div>
              <div className="container-19">
                <div className="product-name">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-232">
              <div className="container-16">
                <div className="product-11">
                </div>
              </div>
              <div className="container-14">
                <div className="product-name-1">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-1">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-233">
              <div className="container-7">
                <div className="product-12">
                </div>
              </div>
              <div className="container-4">
                <div className="product-name-2">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-2">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-234">
              <div className="container-5">
                <div className="product-13">
                </div>
              </div>
              <div className="container-13">
                <div className="product-name-3">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-3">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
          </div>
          <div className="container-11">
            <div className="group-250">
              <div className="container-20">
                <div className="product-17">
                </div>
              </div>
              <div className="container">
                <div className="product-name-7">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-7">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-236">
              <div className="container-18">
                <div className="product-18">
                </div>
              </div>
              <div className="container-8">
                <div className="product-name-8">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-8">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="component-14">
              <div className="container-28">
                <div className="product-19">
                </div>
              </div>
              <div className="container-24">
                <div className="product-name-9">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-9">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-251">
              <div className="container-17">
                <div className="product-110">
                </div>
              </div>
              <div className="container-21">
                <div className="product-name-10">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-10">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
          </div>
          <div className="container-26">
            <div className="group-2521">
              <div className="container-25">
                <div className="product-111">
                </div>
              </div>
              <div className="container-1">
                <div className="product-name-11">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-11">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-240">
              <div className="container-15">
                <div className="product-14">
                </div>
              </div>
              <div className="container-2">
                <div className="product-name-4">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-4">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-241">
              <div className="container-9">
                <div className="product-15">
                </div>
              </div>
              <div className="container-22">
                <div className="product-name-5">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-5">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
            <div className="group-242">
              <div className="container-27">
                <div className="product-16">
                </div>
              </div>
              <div className="container-12">
                <div className="product-name-6">
                  Product Name
                </div>
                <span className="product-type-indoor-outdoor-6">
                  Product Type <br />
                  Indoor / Outdoor
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pages">
          <div className="group-253">
            <span className="container">
              1
            </span>
          </div>
          <div className="group-254">
            <span className="container-1">
              2
            </span>
          </div>
          <div className="group-255">
            <div className="ellipse-5142">
            </div>
            <span className="container-2">
              3
            </span>
          </div>
          <div className="group-256">
          
            <span className="container-3">
              4
            </span>
          </div>
          <div className="vector"/>
        </div>
      </div>
      </div>
      <div className="home-page-3-footer">
      <div className="footer">
        <div className="vector-5">
        </div>
        <div className="container-6">
          <div className="footer-furni-fit">
            <div className="furni-fit">
              FurniFit
            </div>
            <span className="all-rights-reserved">
              © 2024. All rights reserved
            </span>
          </div>
          <div className="nav-footer">
            <span className="about-us">
              About Us
            </span>
          </div>
        </div>
      </div>
      
      </div>
      
     
    </div>
  )
}