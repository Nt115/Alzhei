document.addEventListener('DOMContentLoaded', function() {
    Papa.parse('https://raw.githubusercontent.com/Nt115/Alzhei/main/data.csv', {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data.slice(0, 150); // Limit to the first 10 entries

            // Clear the existing table body
            const tableBody = document.getElementById('taskBody');
            tableBody.innerHTML = '';

            // Iterate through each entry in the data
            data.forEach(entry => {
                const sensorData = entry['Sensor_data'];

                    const time = entry['Time'];
                    const sensorId = entry['Sensor_id'];
                    const remarks = entry['Remarks'];
                    let taskType;

                // Determine the task type based on sensor ID and remarks
                switch (sensorId) {
                    case 'M02':
                    case 'M03':
                    case 'M04':
                    case 'M05':
                    case 'M06': case 'M07': case 'M08': case 'M09': case 'M10':
                    case 'M11': case 'M12': case 'M13': case 'M14':
                        taskType = 'Motion Detected in hall';
                        break;
                    case 'M15': case 'M16':
                        taskType = 'Entering Kitchen';
                        break;
                    case 'M01': case 'M23': 
                        taskType = 'Entering Bedroom';
                        break;
                    case 'M17': case 'M18': 
                        taskType = 'Motion Detected in Kitchen';
                        break;
                    case 'M22': case 'M21': case 'M25': 
                        taskType = 'Motion Detected in Hallway';
                        break;
                    case 'M019': case 'M20': 
                        taskType = 'Motion Detected in Bathroom';
                        break;
                    case 'M48': case 'M42': 
                        taskType = 'Motion Detected at Entrance of Bedroom';
                        break;
                    case 'M31': case 'M32': case 'M30': case 'M33': case 'M36': case 'M35': case 'M34': 
                        taskType = 'Motion Detected in Bedroom';
                        break;
                    case 'M22': case 'M28': case 'M29': case 'M37': case 'M38': case 'M39': case 'M40': case 'M41':  
                        taskType = 'Motion Detected at Entrance of Bedroom';
                        break;
                    case 'I01':
                        taskType = 'Using Oatmeal';
                        break;
                    case 'I02':
                        taskType = 'Using Raisins';
                        break;
                    case 'I03':
                        taskType = 'Using Brown Sugar';
                        break;
                    case 'I04':
                        taskType = 'Using Bowl';
                        break;
                    case 'I05':
                        taskType = 'Took Measuring spoon';
                        break;
                    case 'I06':
                        taskType = 'Taking Medicine';
                        break;
                    case 'I07':
                        taskType = 'Cooking on the pot';
                        break;
                    case 'I08':
                        taskType = 'Reading Phone Book';
                        break;
                    case 'D01':
                        taskType = 'Using Cabinet';
                        break;
                    case 'AD1-A':
                        taskType = 'Hot Water Detected';
                        break;
                    case 'AD1-B':
                        taskType = 'Cold Water Detected';
                        break;
                    case 'AD1-C':
                        taskType = 'Burner On';
                        break;
                    case '*':
                        if (remarks === 'Phone_Call begin') {
                            taskType = 'Phone Call Started';
                        } else if (remarks === 'Phone_Call end') {
                            taskType = 'Phone Call Ended';
                        } else {
                            taskType = 'Using Phone';
                        }
                        break;
                    default:
                        taskType = 'Unknown Task';
                }

                // Create a new row in the table and insert time and task type
                const newRow = tableBody.insertRow();
                const timeCell = newRow.insertCell(0);
                const taskCell = newRow.insertCell(1);

                timeCell.textContent = time;
                taskCell.textContent = taskType;
            });
        }
    });
});

