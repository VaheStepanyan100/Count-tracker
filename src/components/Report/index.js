import './styles.css';

export default function Report({ data }) {

    return (
        <ul className='ul'>
            {data.map(d => (
                <li className='li' key={d.num}>
                    Card number {' '}
                    <b>{d.num}</b> unmounted {' '}
                    <b>{d.count}</b> {' '}
                    time{d.count ? 's' : ''}
                </li>
            ))}
        </ul>
    )
}