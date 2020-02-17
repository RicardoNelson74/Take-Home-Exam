<script>
let employeenumber, firstname, lastname, code, hoursworked, fixedsalary, 
grosssalary, deductions, netsalary, surcharge, lecturercode, tax, overtime, perhour;

employeenumber = prompt(' Please enter employee number')
firstname = prompt('Please enter employee first name')
lastname = prompt('Please enter employee last name')
code = prompt('Please enter employee code.\n r-Regular worker \n l-Lecturer')

if( code == 'r' || code == 'R')
{
	hoursworked = parseFloat(prompt('Please enter hours worked'))
    fixedsalary = parseFloat(prompt('Please enter fixed Salary'))
    
    if(hoursworked < 160)
    {
    	gorsssalary = fixedsalary / 160 * hoursworked
    }
    
    else if( hoursworked > 160)
    {
    	perhour= fixedsalary / 160
    	overtime = hoursworked - 160 * perhour * 2
        grosssalary= fixedsalary + overtime
    }
    
    else
    {
    	grosssalary = fixedsalary
    }
    
}

        
    
if(code == 'l' || code == 'L')
{
	
    lecturercode= prompt('Please enter lecturer qualification code. \n b- Bachelors Degree \n m- Masters')
    hoursworked = parseFloat(prompt('Please enter hours worked'))
    
    if( lecturercode == 'b' || lecturercode == 'B')
    {
    	grosssalary= hoursworked * 325 + 1250
    }
    
    else if ( lecturercode == 'm' || lecturercode == 'M')
    {
    	grosssalary= hoursworked * 575 + 2500
    }
    
    
    
}



tax= grosssalary - 5000 * 25/100

if(grosssalary > 499.99)
        {
        	deductions= 25/100 * grosssalary + 33
        
        	netsalary= grosssalary - deductions
        }
        
else if (grosssalary <= 499.99)
        {
        	deductions= 25/100 * grosssalary + 19.20
        
        	netsalary= grosssalary - deductions
        }



//Employee Pay Slip 
alert(`Employee Name:${firstname + lastname} \n Employee Number:${employeenumber} \n Employee Type:${code}
\n Employee Gross Salary:${grosssalary} \n Employee Deductions :${deductions} \n Employee Net Salary :${netsalary} \n `)

</script>
