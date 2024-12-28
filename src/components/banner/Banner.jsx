import React from 'react';
import bannerimg from '../../assets/Heroright.png'

const Banner = () => {
    return (
        <div className="hero bg-slate-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={bannerimg} />
                <div>
                <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
                <button className="btn btn-success bg-slate-50 mt-12">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;