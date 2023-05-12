import React, { lazy, Suspense } from 'react'
import './cards.css';

const RemoteCard = lazy(() => import('remote_cards/RemoteCard') as any);

class RemoteCards extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(): void {}

    render() {
        return <div className="card-boxes">
            <Suspense fallback={<div>Loading...</div>}>
                <RemoteCard />
            </Suspense>
        </div>
    }
}

export default RemoteCards;