
module.exports = function (Sequelize, dataTypes) { 
    const alias = "Movie";
    const cols = {
        
            id: {
                primaryKey:true, 
                autoIncrement:true, 
                type: dataTypes.INTEGER 
            }, 
            title: { 
                notNull: false, 
                type: dataTypes.STRING 
            },
            rating: { 
                notNull: false, 
                type: dataTypes.DECIMAL(3,1) 
            },
            awards: { 
                notNull: false, 
                type: dataTypes.INTEGER 
            }, 
            release_date: { 
                notNull: false, 
                type: dataTypes.DATE 
            }, 
            length: { 
                notNull: true, 
                type: dataTypes.INTEGER 
            }
        
    };

    const config = { 
        timestamps : false , 
        //tableName = "movies"
    }
    
    const Movie = Sequelize.define(alias, cols, config) 

    return Movie ; 
}