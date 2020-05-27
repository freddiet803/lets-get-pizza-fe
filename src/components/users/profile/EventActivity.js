import React from 'react'
import { Feed, Divider } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const EventActivity = ({ user, event }) => {
  const curr_user = useSelector(({user}) => user.username)
    return (
        <>
        <Feed.Event>
            <Feed.Label image={user.profile_image} />
            <Feed.Content>
                <Feed.Summary>
                <Feed.User as="a" href={user.username !== curr_user ? `/users/${user.username}` : `/users/dash/profile`}>
                    {user.username}
                  </Feed.User>{" "}
                  posted an event at {event.business_name}
                </Feed.Summary>
                <br />
                <Feed.Summary>{event.title}</Feed.Summary>
                <Feed.Extra text>
                  {event.description}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like icon="thumbs up" /> 13 Likes {" "}
                </Feed.Meta>
              </Feed.Content>
        </Feed.Event>
        <Divider />
        </>
    )
}

export default EventActivity