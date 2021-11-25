import { User } from '../../../models/User';
import Table from '../../atoms/table/table';
import './usersTable.css'

interface UserTableProps {
    users: User[];
    displayMoreInfo: boolean;
}

export default function UserTable(props: UserTableProps) {

    const userMappedElements = <>
        {props.users.map((user: User) =>
            <tr key={`UserId${user.id}`}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{props.displayMoreInfo ?
                    <span>
                        {user.address?.street && <p><b>Street:</b> {user.address?.street}</p>}
                        {user.address?.suite && <p><b>Suite:</b> {user.address?.suite}</p>}
                        {user.address?.city && <p><b>City:</b> {user.address?.city}</p>}
                        {user.address?.zipcode && <p><b>Zipcode:</b> {user.address?.zipcode}</p>}
                        {user.address?.geo && <p><b>Geolocation: </b>
                            {user.address?.geo?.lat && `lat ${user.address?.geo?.lat}`}{` / `}
                            {user.address?.geo?.lng && `lng ${user.address?.geo?.lng}`}
                        </p>}
                    </span>
                    : user.address?.street}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{props.displayMoreInfo ?
                    <span>
                        {user.company?.name && <p><b>Name:</b> {user.company?.name}</p>}
                        {user.company?.catchPhrase && <p><b>Catch phrase:</b> {user.company?.catchPhrase}</p>}
                        {user.company?.bs && <p><b>BS:</b> {user.company?.bs}</p>}
                    </span>
                    : user.company?.name}
                </td>
            </tr>)
        }
    </>

    return (
        <Table
            tableHeadContent={<tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th className={'moreInfoCell'}>
                    Address
                    <span>To show {props.displayMoreInfo ? 'less' : 'more'} info, click button on the top</span>
                </th>
                <th>Phone</th>
                <th>Website</th>
                <th className={'moreInfoCell'}>
                    Company
                    <span>To show {props.displayMoreInfo ? 'less' : 'more'} info, click button on the top</span>
                </th>
            </tr>}
            tableBodyContent={userMappedElements}
        />
    );
}