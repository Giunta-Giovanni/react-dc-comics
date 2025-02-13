export default function BoxLink(props) {
    return (
        <ul>
            {props.linkCategory.map(link => (
                <li key={link.id}  >
                    <a href={link.url}>{link.text}</a>
                </li>
            ))}
        </ul >
    )
}