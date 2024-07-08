import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Row, Col } from 'antd'
import DevelopersCard from './../particles/DevelopersCard'

const developers = [
    {
        name: 'John',
        description: 'Saya adalah database administrator',
        src: null
    }, {
        name: 'Doe',
    }, {
        name: 'Saturn',
    }
  ]
  

export default function DeveloperPage() {
    return (
        <Row gutter={[24, 24]}>
        <TransitionGroup component={null}>
            { developers.map((developer, index) => (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="card-animation"
                appear
              >
                <Col xs={24} sm={24} md={8} lg={6} xl={6} key={index} style={{ transitionDelay: `${index * 100}ms` }} >
                  <DevelopersCard data={developer} />
                </Col>
              </CSSTransition>
            ) ) }
          </TransitionGroup>
      </Row>
    )
}