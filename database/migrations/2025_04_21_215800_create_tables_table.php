<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('tables', function (Blueprint $table) {
            $table->id();
            $table->integer('number')->unique(); // Numéro de table (ex: 1, 2, 3...)
            $table->integer('seats'); // Nombre de places
            $table->enum('status', ['free', 'reserved', 'occupied'])->default('free');
            $table->enum('type', ['round', 'rectangular', 'square']);
            $table->integer('x_position')->nullable(); // Position X pour le plan du restaurant
            $table->integer('y_position')->nullable(); // Position Y
            $table->integer('width')->default(50); // Largeur visuelle
            $table->integer('height')->default(50); // Hauteur visuelle
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tables');
    }
};
