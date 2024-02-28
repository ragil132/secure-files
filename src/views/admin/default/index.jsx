import Upload from "../profile/components/Upload";

const Dashboard = () => {
  return (
    <div>
     

      {/* Charts */}

      <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
        <Upload/>
      </div>

    
    </div>
  );
};

export default Dashboard;
