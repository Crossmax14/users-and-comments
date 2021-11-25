import './table.css';

interface TableProps {
    tableHeadContent: JSX.Element;
    tableBodyContent: JSX.Element;
    tableFooterContent?: JSX.Element;
    style?: React.CSSProperties;
}

export default function Table(props: TableProps) {
    return (
        <div className={'tableWrapper'} style={{ ...props.style }}>
            <table>
                <thead>{props.tableHeadContent}</thead>
                <tbody>{props.tableBodyContent}</tbody>
                <tfoot>{props.tableFooterContent}</tfoot>
            </table>
        </div>
    );
}