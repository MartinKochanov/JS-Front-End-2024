function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const tbodyElement = document.querySelector('#results tbody');
    const firstNameElement = document.querySelector('input[type=text][name=firstName]')
    const lastNameElement = document.querySelector('input[type=text][name=lastName]')
    const facultyNumberElement = document.querySelector('input[type=text][name=facultyNumber]')
    const gradeElement = document.querySelector('input[type=text][name=grade]')
    const submitButton = document.getElementById('submit');


    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {

            Object.values(data)
                .forEach(student => {
                    tbodyElement.appendChild(createStudentTrElement(student));
                });
        });

    submitButton.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstNameElement.value,
                lastName: lastNameElement.value,
                facultyNumber: facultyNumberElement.value,
                grade: Number(gradeElement.value),
            })
        })
            .then(res => res.json())
            .then(student => {
                tbodyElement.appendChild(createStudentTrElement(student));
            })

        firstNameElement.value = '';
        lastNameElement.value = '';
        facultyNumberElement.value = '';
        gradeElement.value = '';
    })




    function createStudentTrElement(student) {

        const createStudentTdElement = (value) => {
            const tdElement = document.createElement('td');
            tdElement.textContent = value;

            return tdElement;
        }

        const trElement = document.createElement('tr');

        trElement.appendChild(createStudentTdElement(student.firstName));
        trElement.appendChild(createStudentTdElement(student.lastName));
        trElement.appendChild(createStudentTdElement(student.facultyNumber));
        trElement.appendChild(createStudentTdElement(Number(student.grade)));

        return trElement;
    }
}

attachEvents();