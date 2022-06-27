import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Q1: Difference between authorization and authentication</h2>
            <br />
            <h3>Ans: Verifying someone's identity is called authentication, whereas confirming a user's access to certain software, files, and data is called authorisation.</h3>
            <br />
            <h2>Q2: Why are you using firebase? What other options do you have to implement authentication?</h2>
            <br />
            <h3>Ans: To authenticate users for our project, Firebase Authentication offers ready-made UI frameworks, simple SDKs, and backend services. It supports federated identity providers like Google, Facebook, and Twitter, as well as passwords, phone numbers, and other methods.</h3>
            <br />
            <h2>Q3: What other services does firebase provide other than authentication</h2>
            <br />
            <h3>Ans: There are many services which Firebase provides, Most useful of them are:
                Cloud Firestore,
                Cloud Functions,
                Authentication,
                Hosting,
                Cloud Storage,
                Google Analytics,
                Predictions,
                Cloud Messaging,
                Dynamic Links,
                Remote Config</h3>

        </div>
    );
};

export default Blogs;