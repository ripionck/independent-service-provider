import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container mt-5">
            <Card border="light" >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Difference between Authentication and Authorization?</Card.Title>
                    <Card.Text>
                        Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it’s true that they’re usually employed in an equivalent context with an equivalent tool, they’re utterly distinct from one another.

                        In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person’s or user’s authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="light" className="mt-5" >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        To sign a user into your app, you first get authentication credentials from the user. These credentials can be the user's email address and password, or an OAuth token from a federated identity provider. Then, you pass these credentials to the Firebase Authentication SDK. Our backend services will then verify those credentials and return a response to the client.

                        After a successful sign in, you can access the user's basic profile information, and you can control the user's access to data stored in other Firebase products. You can also use the provided authentication token to verify the identity of users in your own backend services.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="light" className="mt-5" >
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>What other services does firebase provide other than authentication?</Card.Title>
                    <Card.Text>
                        Firebase is a cross-platform real-time mobile database platform that allows coders to focus on what they do best—coding their apps—without having to worry about DevOps concerns like server infrastructure and database modeling.  Backed by Google, Firebase takes the complexities out of dealing with back-end real-time databases, authenticating users, and working with offline synchronization workflows.

                        While there are many solutions out there for BaaS, such as Realm (check out my Realm.io tutorial here on Envato Tuts+) Firebase doesn’t require any prior infrastructure server configuration, as the platform takes care of hosting and in return exposes an SDK.

                        Beyond a NoSQL real-time database, with Firebase you get analytics, crash-reporting, user authentication, cloud messaging, push notifications and more. The associated costs also scale with your project—as you grow, you move from a freemium model to a per-usage model.

                        In this tutorial, I'll show you how to set up Firebase on iOS using CocoaPods, and how to authenticate users using two popular methods: email and password or via the phone with SMS.

                        To learn about Firebase for Android, check out some of our other tutorials here on Envato Tuts+.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Blogs;