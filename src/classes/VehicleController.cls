public class VehicleController {
    
    private static final String SAMPLE_SVG = 'digraph R {  rankdir=LR  node [style=rounded]  node1 [shape=box]  node2 [fillcolor=yellow, style="rounded,filled", shape=diamond]  node3 [shape=record, label="{ a | b | c }"] node1 -> node2 -> node3}';
    
	@AuraEnabled
    public static String getVehicleContent(String content)
    {
        return content != null ? content : SAMPLE_SVG;
    }
}