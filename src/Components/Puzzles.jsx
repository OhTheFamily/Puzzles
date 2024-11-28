import Nav from './Nav.jsx'
import NavItem from './NavItem.jsx'
import List from './List.jsx'
import ListItem from './ListItem.jsx'

export default function Puzzles({ puzzles }) {
    return (
        <div className="divide-y divide-slate-100">
            <Nav>
                <NavItem href="/new" isActive>New Releases</NavItem>
                <NavItem href="/top">Top Rated</NavItem>
                <NavItem href="/picks">Vincent’s Picks</NavItem>
            </Nav>
            <List>
                {puzzles.map((puzzle) => (
                    <ListItem key={puzzle.id} puzzle={puzzle} />
                ))}
            </List>
        </div>
    )
}
