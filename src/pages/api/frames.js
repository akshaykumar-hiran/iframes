import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("Frames").select("*");
    if (error) return res.status(400).json({ error });
    res.json(data);
  }

  if (req.method === "POST") {
    const { title, price, material, dimension, image_url } = req.body;
    const { data, error } = await supabase
      .from("Frames")
      .insert([{ title, price, material, dimension, image_url, stock: 10 }]);
    if (error) return res.status(400).json({ error });
    res.json(data);
  }
}
