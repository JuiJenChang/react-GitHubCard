import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        let data = this.props.data;
        let followers = `${data.homeUrl}/followers`;
        let repositories = `${data.homeUrl}?tab=repositories`;
        let following = `${data.homeUrl}/following`;
        if (data.notFound === 'Not Found')
            return (
                <div>
                    <h2>Oops !!!</h2>
                    <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
                </div>
            );
        else
            return (
                <section>
                    <div className="github-profile">
                        <a href={data.homeUrl}
                            target="_blank"
                            title={data.name || data.username}>
                            <img src={data.avatar}
                                alt={data.username} />
                        </a>
                        <h2>
                            <a href={data.homeUrl}
                                title={data.username}
                                target="_blank">
                                {data.name || data.username}
                            </a>
                        </h2>
                        <h3>{data.location || 'I Live In My Mind' }</h3>
                    </div>
                    <div className="github-profile-list">
                        <ul>
                            <li>
                                <a href={followers} target="_blank" title="Number Of Followers">
                                  <p>{data.followers}</p>
                                  <span>Followers</span>
                                </a>
                            </li>
                            <li>
                                <a href={repositories} target="_blank" title="Number Of Repositoriy">
                                    <p>{data.repos}</p>
                                    <span>Repositoriy</span>
                                </a>
                            </li>
                            <li>
                                <a href={following} target="_blank" title="Number Of Following">
                                    <p>{data.following}</p>
                                    <span>Following</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            );
    }
}

export default Profile;