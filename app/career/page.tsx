import { useEffect, useState } from "react";
import { Warning20Regular } from "@fluentui/react-icons";
type Career = {
    id: number;
    name: string;
};

const Career: React.FC = () => {
    const [careers, setCareers] = useState<Career[]>([]);

    useEffect(() => {
        const fetchCareers = async () => {
            const response = await fetch('/api/careers');
            const data = await response.json();
            setCareers(data);
        };
        fetchCareers();
    }, []);
    return (
        <div className="md:px-40 px-5 pt-10 pb-5 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Careers</h1>

            {careers.length > 0 ? careers.map((career) => (
                <div key={career.id}>
                    <h2>{career.name}</h2>
                </div>
            )) : <>
                <div className="flex items-center gap-2">
                    <Warning20Regular />
                    <span>
                        No career opportunity is available at the moment. Please check back later.
                    </span>
                </div>
            </>}
        </div>
    );
}

export default Career;