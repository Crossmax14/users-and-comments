import { Comment } from '../../../models/Comments';
import Table from '../../atoms/table/table';

interface CommentsTableProps {
    comments: Comment[];
}

export default function CommentsTable(props: CommentsTableProps) {

    const commentsMappedElements = <>
        {props.comments.map((comment: Comment) =>
            <tr key={`CommentId${comment.id}`}>
                {/* <td>{comment.postId}</td> */}
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
            </tr>)}
    </>

    return (
        <Table
            tableHeadContent={<tr>
                {/* <th>Post ID</th> */}
                <th>Title</th>
                <th>Author email</th>
                <th>Content</th>
            </tr>}
            tableBodyContent={commentsMappedElements}
        />
    );
}