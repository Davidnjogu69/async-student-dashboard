
function fetchStudents() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Amina Osei", score: 87, phase: 3 },
                { id: 2, name: "Brian Mwangi", score: 45, phase: 2 },
                { id: 3, name: "Cate Wanjiru", score: 92, phase: 3 },
                { id: 4, name: "David Otieno", score: 68, phase: 1 },
                { id: 5, name: "Eva Kamau", score: 55, phase: 2 },
                { id: 6, name: "Frank Mutua", score: 88, phase: 3 }
            ]);
        }, 1500);
    });
}


// Async Report Function
const runReport = async () => {
    try {

        // Fetch students
        const students = await fetchStudents();

        // Task 1: Add grades using map + spread
        const gradedStudents = students.map(student => {
            let grade;

            if (student.score >= 80) {
                grade = "Distinction";
            } else if (student.score >= 60) {
                grade = "Pass";
            } else {
                grade = "Fail";
            }

            return {
                ...student,
                grade
            };
        });

        // Task 2: Filter passing students
        const passingStudents = gradedStudents.filter(
            student => student.score >= 60
        );

        // Task 3: Average score using reduce
        const averageScore = (
            gradedStudents.reduce(
                (sum, student) => sum + student.score,
                0
            ) / gradedStudents.length
        ).toFixed(2);

        // Task 4: Print each student
        console.log("=== Student Report ===\n");

        gradedStudents.forEach(student => {
            console.log(
                `${student.name} | Phase ${student.phase} | ${student.score}% | ${student.grade}`
            );
        });

        // Task 5: Print summary
        console.log("\n========================");
        console.log(`Total Students : ${gradedStudents.length}`);
        console.log(`Passing        : ${passingStudents.length}`);
        console.log(`Average Score  : ${averageScore}%`);

    } catch (error) {
        console.error("Error fetching students:", error);
    }
};


// Run the report
runReport();