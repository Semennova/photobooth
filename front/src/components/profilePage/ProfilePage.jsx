import React from 'react'
import { Button, Card, Form, Row, Toast } from 'react-bootstrap'
import s from './profilePage.module.css'

export function ProfilePage({posts}) {
    console.log(posts);
    
    return (<>
        <div className={s.container}>
            <Card className={s.profile_pic_container}>
                <Card.Img className={s.img} src="https://avatars.mds.yandex.net/i?id=e67c20f98bdc512c5d3bc20c140f8fac-5719595-images-taas-consumers&n=27&h=480&w=480" />
                <Card.Img className={s.img} src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" />
            </Card>

            <Row> &nbsp; </Row>

            <Form>
                <Form.Group className={`${s.input_group} mb-3`}>
                    <Form.Control type="text" placeholder="Get your message across!" />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>

            <Toast className={s.tweet_container}>
                <Toast.Header >
                    <img src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" className={s.profile_pic} alt="" />
                    <strong className="me-auto">My name here</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
            <Toast style={{ width: '100%', marginBottom: '10px' }}>
                <Toast.Header >
                    <img src="https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg" className={s.profile_pic} alt="" />
                    <strong className="me-auto">My name here</strong>
                    <small>15 mins ago</small>
                </Toast.Header>
                <Toast.Body>My tweets here!</Toast.Body>
            </Toast>
        </div>



    </>

    )
}
