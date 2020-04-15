import React from "react";

const patientForm = (props) => {
    return (
        <section className="form-group pb-5 pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div className="input-label-up color-p">
                            <label>First Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="input-label-up color-p">
                            <label>Second Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="input-label-up color-p">
                            <label>Age</label>
                            <input className="form-control" placeholder="Enter Age in Numbers" type="text"/>
                        </div>
                        <div>
                            <div><strong>Gender</strong></div>
                            <div className="d-flex mt-3">
                                <label className="radio-btn">Male
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                                <label className="radio-btn ml-3">Female
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                                <label className="radio-btn ml-3">Other
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="input-label-up color-p">
                            <label>Body Temperature</label>
                            <input className="form-control" placeholder="Enter Temperature in Degree Celsius"
                                   type="text"/>
                        </div>

                        <div className="mt-4">
                            <div><strong>Sneezing</strong></div>
                            <div className="d-flex mt-4">
                                <label className="radio-btn">Yes
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                                <label className="radio-btn ml-3">No
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>

                            </div>
                        </div>

                        <div className="mt-4">
                            <div><strong>Difficulty in Breathing</strong></div>
                            <div className="d-flex mt-4">
                                <label className="radio-btn">Yes
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                                <label className="radio-btn ml-3">No
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>

                            </div>
                        </div>

                        <div className="mt-4">
                            <div><strong>Dry Cough</strong></div>
                            <div className="d-flex mt-4">
                                <label className="radio-btn">Yes
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                                <label className="radio-btn ml-3">No
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>

                            </div>
                        </div>

                        <div className="mt-4">
                            <div><strong>RT-PCR Conducted</strong></div>
                            <div className="d-flex mt-4">
                                <label className="radio-btn">Yes
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>
                                <label className="radio-btn ml-3">No
                                    <input type="radio" name="radio"/>
                                        <span className="checkmark"></span>
                                </label>

                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-4">
                            <button className="btn btn-secondary">Upload X-Ray</button>
                            <p className="text-muted ml-3">File Uploaded Successfully</p>
                        </div>

                        <div className="mt-4">
                            <button className="btn btn-secondary">Upload CT-Scan</button>

                        </div>

                        <div className="mt-4 d-flex justify-content-center">
                            <button className="btn btn-secondary"
                                    style={{
                                        paddingRight:'40px',
                                        paddingLeft: '40px'
                                    }}>Evaluate
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    );

}

export default patientForm;
