import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
// import { supabase } from "./Cliente";
import { View ,Text} from "react-native";
// const supabase = createClient("https://llzfydminzoftemzwjle.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsemZ5ZG1pbnpvZnRlbXp3amxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MTIyOTQsImV4cCI6MjAzMDI4ODI5NH0.h_95t9g2ewvUPoWDt2ygBlgNq4xI7XkCkEJEItW7apg");
// import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://llzfydminzoftemzwjle.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsemZ5ZG1pbnpvZnRlbXp3amxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDcxMjI5NCwiZXhwIjoyMDMwMjg4Mjk0fQ.xYaG2aBFCgCTyB7H6aMr2eQ-yJA0JG243b0EEQduzKE'
const supabase = createClient(supabaseUrl, supabaseKey)

function App() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data, error } = await supabase
          .from('usuario')
          .select('*');
      
        if (error) {
          console.error('Erro ao buscar dados:', error.message);
        } else {
          if (data.length === 0) {
            console.log('Nenhum dado encontrado.');
          } else {
            setCountries(data)
            console.log('Dados encontrados:', data);
          }
        }
      }
     
      
    return (
        <View>
           
            {
                countries.map((item,index)=>(
                    <Text key={index}>{item.senha}</Text>
                ))
            }
        </View>

    );
}

export default App;