import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Difference between authorization and authentication</h2>
<h4>Authentication</h4>
<ul>
<li>Authentication verifies who the user is.</li>
<li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
<li>Authentication is the first step of a good identity and access management process.</li>
</ul>


<h4>Authorization</h4>
<ul>
<li>Authorization determines what resources a user can access.</li>
<li>Authorization works through settings that are implemented and maintained by the organization.</li>
<li>Authorization always takes place after authentication.</li>
</ul>

<h2>why are you using firebase? what other options do you have to implement authentication?</h2>

<p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

<h2>What other services does firebase provide other than authentication</h2>
<ul>
<li>Cloud Firestore.</li>
<li>Cloud Functions.</li>
<li>Hosting.</li>
<li>Google Analytics.</li>
<li>Cloud Messaging.</li>
</ul>
        </div>
    );
};

export default Blog;