const React = require('react');
const DefaultLayout = require('../views/Team')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Score'}>
                
                <form action='/sports' method="POST">
                    Name: <input type="text" score="score" /><br />
                    Number: < input type="text" score="number"/> <br />
                     <br />
                    <input type="submit" name="" value="score"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;