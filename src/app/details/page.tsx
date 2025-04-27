"use client";

import Image from 'next/image';
import { useRef, useState } from "react";

export default function LoginDetails() {
    const fileInputRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(null); // To store uploaded image

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a temporary URL
            setPreviewImage(imageUrl); // Set the image
        }
    };

    return (
        <div className="login-page background-one">
            <div className="overlay"></div>

            <div className="container">
                <div className="page-content">
                    <div className="login-sec">
                        <div className="col-md-6">
                            <div className="left">
                                <div className="logo">
                                    <Image src="/nexlearn-logo.webp" alt="NexLearn Logo" width={200} height={50} />
                                </div>
                                <div className="login-img">
                                    <Image src="/login-img.webp" alt="Login Image" width={335} height={260} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="right">
                                <div className="login-form">
                                    <h2>Add Your Details</h2>

                                    <form>
                                        {/* Upload Box */}
                                        <div className="form-group upload-form-group">
                                            <div className="upload-content" onClick={!previewImage ? handleUploadClick : undefined}>
                                                {previewImage ? (
                                                    <div className="image-preview-wrapper">
                                                        <img
                                                            src={previewImage}
                                                            alt="Preview"
                                                            className="uploaded-image"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="remove-image-btn"
                                                            onClick={(e) => {
                                                                e.stopPropagation(); // prevent triggering upload click
                                                                setPreviewImage(null); // clear image
                                                            }}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Image src="/camera.svg" alt="Upload Icon" width={50} height={50} className="upload-icon" />
                                                        <p>Add Your Profile Picture</p>
                                                    </>
                                                )}
                                            </div>

                                            <input
                                                type="file"
                                                id="upload-photo"
                                                name="photo"
                                                accept="image/*"
                                                hidden
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="Name">Name</label>
                                            <input
                                                type="text"
                                                id="Name"
                                                name="Name"
                                                placeholder="Enter Your Full Name"
                                                className="form-input"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Email">Email</label>
                                            <input
                                                type="text"
                                                id="Email"
                                                name="Email"
                                                placeholder="Enter Your Email Address"
                                                className="form-input"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="qualification">Qualification</label>
                                            <select id="qualification" name="qualification" className="form-input">
                                                <option value="">Select Qualification</option>
                                                <option value="highschool">High School</option>
                                                <option value="bachelor">Bachelor's Degree</option>
                                                <option value="master">Master's Degree</option>
                                                <option value="phd">Ph.D.</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-90">
                                            <label htmlFor="district">District</label>
                                            <select id="district" name="district" className="form-input">
                                                <option value="">Select District</option>
                                                <option value="district1">District 1</option>
                                                <option value="district2">District 2</option>
                                                <option value="district3">District 3</option>
                                            </select>
                                        </div>

                                        <button type="submit" className="submit-btn">Get Started</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
