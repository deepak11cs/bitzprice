export default ()=>{
    return (
        <style jsx>{`
            ul {
                background-color: #444;
                color: white;
                list-style: none;
                display: flex;
                align-items: center;
                padding: 20px;
            }
            ul>li{
                margin-right: 20px;
                font-size: 18px;
            }
            ul>li>a{
                text-decoration: none;
                color: white;
            }
        `}
        </style>
    );
}