export default function Filter(props) {

    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }

    return (
        <div className="filter">
            {
                filterData.map((data) => {
                    return (<button key={data.id} className={`bg-[#2A253B] py-1 px-2 rounded-md 
                    ${category === data.title ? "category" : ""}
                    `} onClick={() => filterHandler(data.title)}>
                        {data.title}
                    </button>
                    );
                })
            }
        </div>
    );
};